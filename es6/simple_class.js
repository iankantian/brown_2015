/**
 * Created by joshuabrown on 5/3/16.
 */
class View {
    constructor(name) {
        this._name = name;
    }

    name(name) {
        if (!arguments.length) return this._name;
        this._name = name;
        return this;
    }
}

export default View;
