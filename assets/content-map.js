const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["500万网彩票", "首页推荐", "彩票资讯"],
      url: "https://5mlottery.com/home",
      content: "欢迎访问500万网彩票，获取最新彩票信息。"
    },
    {
      id: "lottery",
      title: "彩票中心",
      tags: ["500万网彩票", "彩票玩法", "开奖结果"],
      url: "https://5mlottery.com/lottery",
      content: "提供多种彩票玩法与实时开奖数据。"
    },
    {
      id: "trends",
      title: "走势分析",
      tags: ["500万网彩票", "走势图", "数据分析"],
      url: "https://5mlottery.com/trends",
      content: "历史开奖走势与统计图表展示。"
    },
    {
      id: "rules",
      title: "玩法规则",
      tags: ["500万网彩票", "玩法说明", "规则介绍"],
      url: "https://5mlottery.com/rules",
      content: "详细解释每种彩票的规则与奖金计算。"
    },
    {
      id: "faq",
      title: "常见问题",
      tags: ["500万网彩票", "帮助中心", "FAQ"],
      url: "https://5mlottery.com/faq",
      content: "用户常见问题及解答。"
    }
  ],
  keywordTags: [
    "500万网彩票",
    "彩票",
    "开奖",
    "走势",
    "玩法",
    "奖金",
    "规则",
    "帮助"
  ]
};

function searchSections(query) {
  if (!query || typeof query !== "string") {
    return [];
  }
  const lowerQuery = query.toLowerCase();
  const results = [];
  for (let i = 0; i < contentMap.sections.length; i++) {
    const section = contentMap.sections[i];
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const contentMatch = section.content.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    if (titleMatch || contentMatch || tagMatch) {
      results.push(section);
    }
  }
  return results;
}

function getSectionById(id) {
  for (let i = 0; i < contentMap.sections.length; i++) {
    if (contentMap.sections[i].id === id) {
      return contentMap.sections[i];
    }
  }
  return null;
}

function listAllTags() {
  const tags = [];
  for (let i = 0; i < contentMap.sections.length; i++) {
    for (let j = 0; j < contentMap.sections[i].tags.length; j++) {
      const tag = contentMap.sections[i].tags[j];
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }
  return tags;
}

function filterByTags(targetTags) {
  if (!Array.isArray(targetTags) || targetTags.length === 0) {
    return [];
  }
  const lowerTargets = targetTags.map(t => t.toLowerCase());
  const matched = [];
  for (let i = 0; i < contentMap.sections.length; i++) {
    const section = contentMap.sections[i];
    const hasMatch = section.tags.some(tag => lowerTargets.includes(tag.toLowerCase()));
    if (hasMatch) {
      matched.push(section);
    }
  }
  return matched;
}

function getAllUrls() {
  const urls = [];
  for (let i = 0; i < contentMap.sections.length; i++) {
    urls.push(contentMap.sections[i].url);
  }
  return urls;
}

function getKeywords() {
  return contentMap.keywordTags.slice();
}

function isUrlInMap(url) {
  const lowerUrl = url.toLowerCase();
  for (let i = 0; i < contentMap.sections.length; i++) {
    if (contentMap.sections[i].url.toLowerCase() === lowerUrl) {
      return true;
    }
  }
  return false;
}

function countSections() {
  return contentMap.sections.length;
}

function getSectionTitles() {
  return contentMap.sections.map(section => section.title);
}

function simpleSearch(query) {
  const results = searchSections(query);
  if (results.length === 0) {
    return "未找到匹配的内容分区。";
  }
  let output = "匹配结果:\n";
  for (let i = 0; i < results.length; i++) {
    output += `- ${results[i].title} (${results[i].url})\n`;
  }
  return output;
}