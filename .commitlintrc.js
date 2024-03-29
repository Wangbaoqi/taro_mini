module.exports = {
  extends: ['@commitlint/config-conventional'],
  /**
   * rule配置说明:：rule由name和配置数组组成，
   * 如：'name: [0, 'always', 72]'，
   * 数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，
   * 第二位为应用与否，可选always|never，
   * 第三位该rule的值
   */
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'chore', // 不属于其他类型的类型
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'docs', // 文档更新
        'feat', // 新增功能
        'fix', // bug 修复
        'perf', // 性能优化
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'revert', // 回滚某个更早之前的提交
        'style', // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
        'test' // 新增测试用例或是更新现有测试
      ]
    ],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100]
  }
}