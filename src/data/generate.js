// https://lodash.com/
// https://github.com/Marak/faker.js
const between = (min = 0, max = 1) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');
    return {
        articles: _.times(20, function (n) {
            var article = {
                id: n,
                title: faker.random.words(Math.ceil(Math.random() * 10)),
                date: faker.date.past(),
                authorId: faker.random.number({
                    min: 0,
                    max: 19
                }),
                body: faker.lorem.words(Math.ceil(Math.random() * 100))
            };
            return article;
        }),
        authors: _.times(20, function (n) {
            return {
                id: n,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                bio: faker.lorem.words(Math.ceil(Math.random() * 50)),
                website: faker.internet.url()
            };
        }),
        ipsum: _.times(1000, function (n) {
            return faker.lorem.words(1);
        }),
        userConfig: {
            fastTrack: _.times(15, (n) => {
                return { 
                    icon: 'bell', 
                    href: '/', 
                    title: faker.lorem.words(2), 
                    active: n == 0 ? true : false }
            })
        }
    };
};