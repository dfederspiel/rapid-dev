var app = require('../../src/js/app');

describe("app file", function () {
    describe("when rendering react components", function () {
        beforeEach(function () {
            spyOn(document, 'getElementById');
            spyOn(ReactDOM, 'render');
        });

        it("gets element from the DOM", function () {
            app.tryRenderReactComponent('test', 'props', 'element');
            expect(document.getElementById).toHaveBeenCalledWith('element');
        });
    });
});