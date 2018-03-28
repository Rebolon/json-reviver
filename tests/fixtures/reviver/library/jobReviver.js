"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var job_1 = require("../../entities/library/job");
var itemAbstractReviver_1 = require("../../../../src/reviver/itemAbstractReviver");
var JobReviver = /** @class */ (function (_super) {
    __extends(JobReviver, _super);
    function JobReviver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @returns {string}
     */
    JobReviver.prototype.getNodeName = function () {
        return 'job';
    };
    /**
     *
     * @returns {Object}
     */
    JobReviver.prototype.getNewEntity = function () {
        return new job_1.Job();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "role": {
     *     "translationKey": 'WRITER'
     *   }
     * }
     */
    JobReviver.prototype.getEzPropsName = function () {
        return ['id', 'translationKey',];
    };
    /**
     * {@inheritdoc}
     */
    JobReviver.prototype.getManyRelPropsName = function () {
        return {};
    };
    /**
     * {@inheritdoc}
     */
    JobReviver.prototype.getOneRelPropsName = function () {
        return {};
    };
    return JobReviver;
}(itemAbstractReviver_1.ItemAbstractReviver));
exports.JobReviver = JobReviver;
//# sourceMappingURL=jobReviver.js.map