import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

export function response(data) {
    return { json: () => data };
}

export function promise() {
    return new Promise((resolve, reject) => { });
}

export function resolved(data) {
    return Promise.resolve(data);
}

export function rejected(data) {
    return Promise.reject(data);
}

export function fakeWindowObjectProperty(propertyName, value) {
   return Object.defineProperty(window, propertyName, {
        writable: true,
        value: value,
    });
}
export function fakeDocumentObjectMethod(methodName, value) {
    return Object.defineProperty(document, methodName, {
         writable: true,
         value: value,
     });
 }