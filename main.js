let begin = [
    'There is a widespread concern over the issue that [title]',
    'It is well-known to us that [title] As far as my knowledge is concerned',
    'Recently the problem of [title] has been brought into focus. Nowadays there is a growing concern over',
    'Nowadays [title] has become a problem we have to face.',
    'With the rapid development of science and technology，more and more people believe that [title]',
    'It is commonly believed that [title]',
    'Nowadays，it is common to [title]. Many people like [title] because [remark]. Besides，[remark]'
]

let afterBegin = [
    'As far as I am concerned, ',
    'It goes without saying that ',
    'It can be said with certainty that ',
    'As the proverb says: ',
    'It has to be noticed that ',
    'It\'s generally recognized that ',
    'It\'s likely that ',
    'It\'s hardly that ',
    'It\'s hardly too much to say that ',
    'What calls for special attention is that ',
    'There\'s no denying the fact that ',
    'Nothing is more important than the fact that ',
    'What\'s far more important is that '
]

let remark = [
    'Misfortunes never come alone.',
    'Constant dropping wears the stone.',
    'Life is a leaf of paper white, thereon each of us may write his word or two.',
    'For man is man and master of his fate.',
    'A good medicine tasks bitter.',
    'Live and let live.',
    'A great ship asks for deep waters.',
    'From small beginnings comes great things.',
    'Great works are performed not by strength but by perseverance.',
    'Two heads are better than one.',
    'The voice of one man is the voice of no one.',
    'It is never too late to learn.',
    'Wise men learn by other men\'s mistakes; fools by their own.',
    'Good company on the road is the shortest cut.',
    'It takes all sorts to make a world.',
    'Money spent on the brain is never spent in vain.',
    'On earth there is nothing at but man; in the man there is nothing at but mind.',
    'Wisdom in the mind is better than money in the hand.',
    'Misfortunes tell us what fortune is.',
    'While there is life, there is hope.',
    'Storms make trees take deeper roots.',
    'It is never too late to mend.',
    'Truth never fears investigation.',
    'Misfortunes come on wings and depart on foot.',
    'To an optimist every change is a change for the better.',
    'Every man is his own worst enemy.',
    'The secret of success is constancy of purpose.',
    'Actions speak louder than words.',
    'Saying and doing are two different things.',
    'Better late than never.',
    'Experience is the mother of wisdom.'
]

let phrase = [
    'area',
    'book',
    'business',
    'case',
    'child',
    'company',
    'country',
    'day',
    'eye',
    'fact',
    'family',
    'government',
    'group',
    'hand',
    'home',
    'job',
    'life',
    'lot',
    'man',
    'money',
    'month',
    'mother',
    'night',
    'number',
    'part',
    'people',
    'place',
    'point',
    'problem',
    'program',
    'question',
    'right',
    'room',
    'school',
    'state',
    'story',
    'student',
    'study',
    'system',
    'thing',
    'time',
    'water',
    'way',
    'week',
    'woman',
    'word',
    'work',
    'world',
    'year'
]

// 第二段，分为3部分
// 第一部分，挑1句
let midFirst = [
    'There are many reasons why I prefer [title]. The main reason is that [remark] Another reason is [remark] ',
    'To account for the above-mentioned phenomenon, serious effects have been put forward. ',
    'To begin with, ',
    'Today, [title], which have brought a lot of harms in our daily life. ',
    'As stated in the previous paragraph, ',
    'In view of the present station, ',
    'As has been mentioned above, ',
    'In this respect, we may as well say, ',
    'In reaction to the phenomenon of [title], some people say [remark]',
    'When asked about [title] most people say [remark]',
    'There has sprung up a heated debate as to whether [title]. Some maintain that [remark] However, others believe that [remark]',
    'Most of us may have such experience that [title], '
]

// 第二部分，挑2句
let midSecond = [
    'For one thing, [phrase] can be seen as the most important factor . For another, [phrase] is apparently another driving force. Above all, [phrase] also plays an indispensable role. ',
    'What might account for the phenomenon? It is no difficult job for us to come up with some factors that underlie it.  ',
    'As is vividly portrayed in the drawing above, [remark], which seems to be interesting and ridiculous [phrase]. ',
    'However, The most striking feature that impresses me deeply is that unbelievably, [remark]. ',
    '[title] not only does harm to our [phrase] but also results in a frustrating life among young. ',
    'In addition, it would be no exaggeration to say that, in any period or in any conditions that can now be foreseen ',
    'However, the difficulty lies in [phrase], ',
    'However, we have to look at the other side of the coin, that is [phrase]. ',
    'As is symbolically revealed in the set of drawings indicates: that [title] is momentous and fundamental to any one who undertakes great deeds.',
    'Undoubtedly, it is [phrase] that keeps us continually doing something valuable and admirable in spite of difficulty, that makes us still full of energy to face the coming challenges and competition and that offers us the foundation for the coming success.',
    'As far as I am concerned, there are several advantages that can be given as below.',
    'Only by cooperating with other people can you put your capacities into full play and can you be the winner in the society.'
]

// 第三部分，挑1句
let midThird = [
    'For another, [title] is demanding for us to keep aware of the importance of saving somebody out of the evil hands of destruction.',
    'Last but not least, If we turn a blind eye to the problem, our community will go from bad to worse.',
    'As far as I am concerned, I agree with the latter opinion to some extent. I think that [remark].',
    'Personally, I believe that [remark].',
    'Consequently, I’m confident that a bright future is awaiting us because [remark].',
    'With the development of society, [remark]. So it\'s urgent and necessary to [title]. If every member is willing to contribute himself to the society, it will be better and better.',
    'For my part, I think it reasonable to [title] Only in this way can you [phrase].',
    'In my opinion, last but not least, [remark]',
    'It is difficult to say whether [title] is good or not.',
    'From what has been discussed above, we may reasonably arrive at the conclusion that [remark].',
    'If we can not take useful means, we may not control this trend, and some undesirable result may come out unexpectedly, so what we should do is [phrase]'
]

// 结尾段落，分为2部分
// 第一部分，引入语
let endStart = [
    'I will conclude by saying that [remark], Therefore, we have the reason to believe that [remark]. All things considered, [remark]. ',
    'From what has been discussed above, we may safely draw the conclusion that [remark]. ',
    'If we read the book, we would learn a lot. It can be concluded from the discussion that [remark]. ',
    'What should we do to fix the problem? ',
    'Are there any recommendations to solve the problem?',
    'How to cure the pressing situation?',
    'The answer is that all hands are required to improve the situation.'
]

// 第二部分，总结
let endSecond = [
    'We cannot assert whether this trend is good or not, for my own part, I bear no prejudices against it like some critics did. But it’s advisable to give a correct guidance to the wholesome development of [title]',
    'The local officials should resort to the law to regulate it . Besides, the central government is not supposed to hand a blank check to the local and should be partially involved in such issue.',
    'Our government should resort to the law to regulate it and shall listen to public opinions and demands when formulating laws, regulations and policies relating to problems above.',
    'Our government should not sugarcoat the problem but listen to public opinions and demands when formulating laws, regulations and policies relating to [title].',
    'Media can broadcast less commercials and more public service advertisements.',
    'The mass media should exert more positive energy, such as being confidence, to the public so that people would react more positively to difficulties and adversities.',
    'Reading books. We can devote some of our leisure to cultivating a love of reading books. You will find what you can not get in reality but in books, such as companion, answers to tough questions, etiquette as well as mental power etc.',
    'It is highly recommended that people should participate in voluntary work. During the process, you would get your mind purified, moral consciousness boosted, and social responsibilities strengthened. You would like to join hands with your peers or colleagues to proceed with your task.',
    'I am determined to say that effort and devotion from all hands would promise a prosperous and harmonious society.',
    'I am sure that effort and devotion from all walks of life would ensure that our society make a rapid strides in near future.'
]


// 取随机数
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// 替换关键词
function replaceKeyword(title, sentence) {
    // 替换字符串
    sentence = sentence.replaceAll('[title]', title)

    // 多个不同字符串替换
    let index = sentence.indexOf('[remark]')
    let num = 0
    while (index !== -1) {
        num++
        index = sentence.indexOf('[remark]', index + 1)
    }
    for (let i = 0; i < num; i++) {
        sentence = sentence.replace('[remark]', remark[randomNumber(0, remark.length)])
    }

    // 多个不同字符串替换
    index = sentence.indexOf('[phrase]')
    num = 0
    while (index !== -1) {
        num++
        index = sentence.indexOf('[phrase]', index + 1)
    }
    for (let i = 0; i < num; i++) {
        sentence = sentence.replace('[phrase]', phrase[randomNumber(0, phrase.length)])
    }
    return sentence
}

// 生成文章
function makeArticle(title) {
    console.log(title)
    let article = []
    // 第一段
    let firstParagraph = replaceKeyword(title, begin[randomNumber(0, begin.length)])
    article.push(firstParagraph)
    // 第二段
    let secondParagraph = replaceKeyword(title, midFirst[randomNumber(0, midFirst.length)]) +
        replaceKeyword(title, midSecond[randomNumber(0, midSecond.length)]) +
        replaceKeyword(title, midSecond[randomNumber(0, midSecond.length)]) +
        replaceKeyword(title, midThird[randomNumber(0, midThird.length)])
    article.push(secondParagraph)
    // 第三段
    let thirdParagraph = replaceKeyword(title, endStart[randomNumber(0, endStart.length)]) +
        replaceKeyword(title, endSecond[randomNumber(0, endSecond.length)])
    article.push(thirdParagraph)

    console.log(article)
    return article
}