// 项目中文详情数据
const projectDetails = {
    'Snailclimb/JavaGuide': {
        title: 'JavaGuide - Java 面试&后端开发指南',
        description: 'JavaGuide 是一份 comprehensive 的 Java 学习笔记，涵盖了 Java 基础、并发编程、JVM、数据库、分布式、微服务等核心技术点。是国内最受欢迎的 Java 面试准备资料之一。',
        tags: '<span class="tag">面试</span><span class="tag">学习</span><span class="tag">后端</span>',
        install: '```bash\n# 克隆项目\ngit clone https://github.com/Snailclimb/JavaGuide.git\n\n# 进入目录\ncd JavaGuide\n\n# 推荐使用 IDEA 打开\n# 项目结构清晰，适合按模块学习\n```',
        usage: '```java\n// 示例：学习并发编程\n\n// 1. 线程创建\nThread thread = new Thread(() -> {\n    System.out.println("Hello from thread");\n});\nthread.start();\n\n// 2. 使用 ExecutorService\nExecutorService executor = Executors.newFixedThreadPool(10);\nexecutor.submit(() -> {\n    // 任务逻辑\n});\nexecutor.shutdown();\n```',
        resources: '• 官方文档：https://javaguide.cn/\n• 配套视频：B 站搜 "Snailclimb"\n• 交流群：关注公众号获取'
    },
    
    'krahets/hello-algo': {
        title: 'Hello 算法 - 动画图解数据结构与算法',
        description: '一本动画图解的数据结构与算法入门书，支持 Python、Java、C++、JavaScript 等多语言。通過動畫演示，讓算法學習變得直觀有趣。',
        tags: '<span class="tag">算法</span><span class="tag">数据结构</span><span class="tag">学习</span>',
        install: '```bash\n# 方式一：直接阅读\ngit clone https://github.com/krahets/hello-algo.git\n\n# 方式二：在线阅读\n# 访问 https://www.hello-algo.com/\n\n# 方式三：IDEA 打开 Java 版本\ncd hello-algo\nls java/\n```',
        usage: '```java\n// 示例：二分查找\n\npublic int binarySearch(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) {\n            return mid;\n        } else if (nums[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return -1;\n}\n```',
        resources: '• 在线阅读：https://www.hello-algo.com/\n• GitHub：https://github.com/krahets/hello-algo'
    },
    
    'iluwatar/java-design-patterns': {
        title: 'Java Design Patterns - 设计模式实战',
        description: '收录了 23 种设计模式的 Java 实现，是学习设计模式的经典项目。每个模式都有详细的代码示例和解释。',
        tags: '<span class="tag">设计模式</span><span class="tag">架构</span><span class="tag">进阶</span>',
        install: '```bash\ngit clone https://github.com/iluwatar/java-design-patterns.git\ncd java-design-patterns\n\n# 使用 Maven 构建\n./mvnw clean install\n\n# 或导入 IDEA/Eclipse\n```',
        usage: '```java\n// 示例：单例模式\n\npublic class Singleton {\n    private static volatile Singleton instance;\n    \n    private Singleton() {}\n    \n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                if (instance == null) {\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}\n```',
        resources: '• 官方网站：https://java-design-patterns.com/\n• 学习顺序：创建型 → 结构型 → 行为型'
    },
    
    'macrozheng/mall': {
        title: 'Mall - 电商系统实战项目',
        description: '一套完整的电商系统，包括前台商城和后台管理系统。Spring Boot 实战经典项目，含 Docker 部署方案。',
        tags: '<span class="tag">实战项目</span><span class="tag">电商</span><span class="tag">Spring Boot</span>',
        install: '```bash\n# 方式一：Docker 部署（推荐）\ngit clone https://github.com/macrozheng/mall.git\ncd mall/doc/docker\ndocker-compose -f docker-compose-env.yml up -d\n\n# 方式二：本地开发\n# 1. 安装 MySQL、Redis、Elasticsearch\n# 2. 导入 sql/mall.sql\n# 3. 修改配置\n# 4. 运行 MallApplication\n```',
        usage: '```yaml\n# application.yml 配置示例\n\nserver:\n  port: 8080\n\nspring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/mall\n    username: root\n    password: root\n  redis:\n    host: localhost\n    port: 6379\n\nmybatis:\n  mapper-locations: classpath:mapper/*.xml\n```',
        resources: '• 文档：http://www.macrozheng.com/\n• 学习路线：mall → mall-swarm → mall-cloud'
    },
    
    'spring-projects/spring-boot': {
        title: 'Spring Boot - 官方框架',
        description: 'Spring Boot 是 Spring 官方推出的框架，让 Java 开发变得更简单。自动配置、嵌入式服务器、starter 生态是其核心特性。',
        tags: '<span class="tag">Spring</span><span class="tag">框架</span><span class="tag">必备</span>',
        install: '```xml\n<!-- Maven 依赖 -->\n<parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>3.2.0</version>\n</parent>\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n</dependencies>\n```',
        usage: '```java\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.*;\n\n@SpringBootApplication\n@RestController\npublic class DemoApplication {\n    \n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n    \n    @GetMapping("/hello")\n    public String hello() {\n        return "Hello Spring Boot!";\n    }\n}\n```',
        resources: '• 官方文档：https://spring.io/projects/spring-boot\n• 中文文档：https://springdoc.cn/'
    },
    
    'doocs/advanced-java': {
        title: 'Advanced Java - Java 面试进阶指南',
        description: 'Java 高级面试题库，涵盖分布式、微服务、高并发等进阶内容。是准备高级工程师面试的必备资料。',
        tags: '<span class="tag">面试</span><span class="tag">进阶</span><span class="tag">架构</span>',
        install: '```bash\ngit clone https://github.com/doocs/advanced-java.git\n\n# 按模块学习\ncd advanced-java\nls -la\n# docs/ - 面试题文档\n# im/ - 分布式即时通讯项目\n```',
        usage: '```java\n// 示例：分布式 ID 生成\n\npublic class SnowflakeIdWorker {\n    private final long twepoch = 1288834974657L;\n    private long sequence = 0L;\n    private long machineId = 1L;\n    \n    public synchronized long nextId() {\n        long timestamp = timeGen();\n        if (timestamp < lastTimestamp) {\n            throw new RuntimeException("Clock moved backwards");\n        }\n        \n        if (lastTimestamp == timestamp) {\n            sequence = (sequence + 1) & 4095;\n            if (sequence == 0) {\n                timestamp = tilNextMillis();\n            }\n        } else {\n            sequence = 0;\n        }\n        \n        lastTimestamp = timestamp;\n        return ((timestamp - twepoch) << 22) |\n               (machineId << 12) |\n               sequence;\n    }\n}\n```',
        resources: '• GitHub：https://github.com/doocs/advanced-java\n• 在线阅读：https://doocs.github.io/advanced-java/'
    },
    
    'elastic/elasticsearch': {
        title: 'Elasticsearch - 分布式搜索引擎',
        description: 'Elasticsearch 是一个基于 Lucene 的分布式搜索和分析引擎。广泛应用于全文搜索、日志分析、安全分析等场景。',
        tags: '<span class="tag">搜索</span><span class="tag">大数据</span><span class="tag">日志</span>',
        install: '```bash\n# 方式一：Docker\ndocker run -d -p 9200:9200 -p 9300:9300 \\\n  -e "discovery.type=single-node" \\\n  elasticsearch:8.11.0\n\n# 方式二：下载安装\n# https://www.elastic.co/downloads/elasticsearch\n```',
        usage: '```bash\n# 创建索引\ncurl -X PUT "localhost:9200/my_index"\n\n# 索引文档\ncurl -X POST "localhost:9200/my_index/_doc/1" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"title": "Hello ES", "content": "Elasticsearch"}\'\n\n# 搜索\ncurl -X GET "localhost:9200/my_index/_search?q=Hello"\n```',
        resources: '• 官方文档：https://www.elastic.co/guide/index.html\n• 中文手册：https://es.xiaoleilu.com/'
    },
    
    'spring-projects/spring-framework': {
        title: 'Spring Framework - 核心框架',
        description: 'Spring 是 Java 企业级开发的基石，提供了依赖注入、AOP、事务管理、Web MVC 等核心功能。',
        tags: '<span class="tag">Spring</span><span class="tag">框架</span><span class="tag">核心</span>',
        install: '```xml\n<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-context</artifactId>\n        <version>6.1.0</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-web</artifactId>\n        <version>6.1.0</version>\n    </dependency>\n</dependencies>\n```',
        usage: '```java\n// Spring IoC 示例\n\n// 配置类\n@Configuration\npublic class AppConfig {\n    @Bean\n    public UserService userService() {\n        return new UserService();\n    }\n}\n\n// 使用\npublic class Application {\n    public static void main(String[] args) {\n        var context = new AnnotationConfigApplicationContext(AppConfig.class);\n        var service = context.getBean(UserService.class);\n        service.sayHello();\n    }\n}\n```',
        resources: '• 官方文档：https://spring.io/projects/spring-framework\n• 视频教程：Spring 源码分析系列'
    },
    
    'google/guava': {
        title: 'Guava - Google 核心工具库',
        description: 'Google 官方推出的 Java 核心工具库，提供集合、缓存、并发、字符串处理、I/O 等常用工具类。',
        tags: '<span class="tag">工具库</span><span class="tag">Google</span><span class="tag">效率</span>',
        install: '```xml\n<dependency>\n    <groupId>com.google.guava</groupId>\n    <artifactId>guava</artifactId>\n    <version>33.0.0-jre</version>\n</dependency>\n```',
        usage: '```java\nimport com.google.common.collect.*;\nimport com.google.common.cache.*;\n\n// 1. 集合工具\nList<Integer> list = Lists.newArrayList(1, 2, 3);\nList<List<Integer>> partition = Lists.partition(list, 2);\n\n// 2. 缓存\nLoadingCache<String, User> cache = CacheBuilder.newBuilder()\n    .maximumSize(1000)\n    .expireAfterWrite(10, TimeUnit.MINUTES)\n    .build(new CacheLoader<String, User>() {\n        @Override\n        public User load(String key) throws Exception {\n            return userService.findById(key);\n        }\n    });\n\n// 3. 不可变集合\nImmutableList<String> immutableList = ImmutableList.of("a", "b", "c");\n```',
        resources: '• GitHub：https://github.com/google/guava\n• 中文文档：https://wizardforcel.gitbooks.io/guava-tutorial/content/'
    },
    
    'NationalSecurityAgency/ghidra': {
        title: 'Ghidra - 软件逆向工程框架',
        description: '美国国家安全局（NSA）开源的逆向工程框架，支持多种处理器指令集和可执行文件格式。',
        tags: '<span class="tag">逆向工程</span><span class="tag">安全</span><span class="tag">NSA</span>',
        install: '```bash\n# 下载\n# https://github.com/NationalSecurityAgency/ghidra/releases\n\n# 解压\nunzip ghidra_11.0.3_PUBLIC.zip\ncd ghidra_11.0.3_PUBLIC\n\n# 运行\n./ghidraRun\n```',
        usage: '```\n# Ghidra 使用流程\n\n1. File → New Project\n2. File → Import File (选择要分析的文件)\n3. 双击导入的文件开始分析\n4. 使用 Function Graph 或 Listing 窗口\n5. 常用快捷键：\n   - G: 跳转到地址\n   - D: 切换数据格式\n   - F: 创建函数\n   - X: 查看交叉引用\n```',
        resources: '• 官方文档：https://ghidra-sre.org/\n• 学习资源：B 站搜 "Ghidra 逆向"'
    }
};

// 导出供 HTML 使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectDetails;
}
