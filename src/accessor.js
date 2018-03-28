"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Accessor(prop, entity, values) {
    // use setter first, then the prop
    var setter = 'set' + (prop[0].toUpperCase() + prop.slice(1));
    var value = typeof values[prop] != 'undefined' ? values[prop] : values;
    if (entity.hasOwnProperty(setter)) {
        entity[setter](value);
    }
    else {
        entity[prop] = value;
    }
    return entity;
}
exports.Accessor = Accessor;
//# sourceMappingURL=accessor.js.map