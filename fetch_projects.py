#!/usr/bin/env python3
"""Fetch latest GitHub trending projects and update the HTML file."""

import requests
import sys
import re

def get_projects(language, count=15):
    """Fetch top projects from GitHub API."""
    url = f"https://api.github.com/search/repositories?q=language:{language}&sort=stars&order=desc&per_page={count}"
    headers = {
        "Accept": "application/vnd.github.v3+json"
    }
    
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        return data.get('items', [])[:count]
    else:
        print(f"Error: {response.status_code}")
        return []

def update_html_file(filepath, projects, var_name):
    """Update the HTML file with new project data."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generate new JavaScript array
    new_data = "[\n"
    for p in projects:
        name = p.get('full_name', '')
        stars = p.get('stargazers_count', 0)
        forks = p.get('forks_count', 0)
        desc = (p.get('description') or '').replace('"', '\\"').replace('\n', ' ')
        desc = desc[:60] + '...' if len(desc) > 60 else desc
        new_data += f"        {{ name: '{name}', stars: {stars}, forks: {forks}, desc: \"{desc}\" }},\n"
    new_data += "    ];"
    
    # Replace the old data
    pattern = rf"const {var_name} = \[\n.*?\];"
    content = re.sub(pattern, f"const {var_name} = {new_data}", content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filepath} with {len(projects)} projects")

def main():
    category = sys.argv[1] if len(sys.argv) > 1 else 'java'
    
    if category == 'java':
        projects = get_projects('java')
        update_html_file('index.html', projects, 'trendingProjects')
    elif category == 'frontend':
        # Frontend uses both JavaScript and TypeScript
        js_projects = get_projects('javascript', 8)
        ts_projects = get_projects('typescript', 7)
        projects = js_projects + ts_projects
        update_html_file('index.html', projects, 'trendingProjects')
    else:
        print(f"Unknown category: {category}")

if __name__ == '__main__':
    main()
