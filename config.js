// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
far config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的妈沫",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第5282天了哦",
        "那就让我祝福我的妈沫",
        "在这属于您的生日里祝您生日快乐",
        "在这里，你亲爱的鹅子祝福您",
        "愿你贪吃不胖",
        "愿你懒惰不丑",
        "愿你永远健康美好依旧",
        "愿你从旧衣服找到零钱",
        "愿你做过的美梦全都实现",
        "愿你永远都有好运气",
        "愿这岁月悠长",
        "若这一切太难",
        "我只愿你",
        "一生平安!",
        "吼哈!"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        让我们开始生日派对吧: "开始",
        音乐起: "音乐",
        上色: "颜色",
        好像少点东西是不是: "好像少点东西是不是",
        来个蛋糕: "蛋糕？",
        让我们插个蜡烛: "蜡烛？",
        生日快乐！: "生日快乐",
        妈沫，我想对你说: "A MESSAGE FOR YOU",
    }
};
