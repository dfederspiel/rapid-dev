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
        myNewObject: _.times(10, function (n) {
            return {
                id: n,
                name: faker.name.firstName()
            }
        }),

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
        serviceCategories: _.times(15, function (n) {
            var available = faker.random.number({
                min: 1,
                max: 10
            });
            return {
                title: faker.company.companyName(),
                imageClass: 'far fa-image',
                servicesAvailable: available,
                servicesUsed: faker.random.number({
                    min: 0,
                    max: available
                })
            };
        }),
        services: _.times(10, function (n) {
            return {
                title: faker.company.companyName(),
                description: faker.lorem.paragraph(5),
                subscribed: faker.random.boolean()
            };
        }),

        fasttrack: _.times(10, function (n) {
            let fakeFontAwesome = ["star", "rocket", "home", "money-bill-alt", "chart-pie", "laptop", "cog", "coffee", "check-square"]
            return {
                title: faker.random.words(1),
                href: faker.internet.url(),
                icon: fakeFontAwesome[faker.random.number({ max: fakeFontAwesome.length - 1 })],
            };
        }),
    };
};