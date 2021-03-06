const sqlModel = require('../../lib/mysql');
const statusCode = require('../../lib/statusCode');
const msg = require('../../lib/responseMsg');

/**
 * 获取分类列表
 * @date 2020-10-14
 */
const getCategoryList = async ctx => {
    const query = ctx.request.query;
    try {
        const [{ total }] = await sqlModel.getCategoryTotal();
        const list = await sqlModel.getCategoryList(query);
        ctx.quertSuccess({
            total,
            list
        });
    } catch (error) {
        ctx.quertFail(error);
    }
}

const addCategory = async ctx => {
    const body = ctx.request.body;
    try {
        const res = await sqlModel.addCategory(body);
        if (res) {
            ctx.addSuccess();
        }
    } catch (error) {
        ctx.addFail(error);
    }
}

const deleteCategory = async ctx => {
    const query = ctx.request.query;
    try {
        const res = await sqlModel.deleteCategory(query);
        if (res) {
            ctx.deleteSuccess();
        }
    } catch (error) {
        ctx.deleteFail(error);
    }
}

const updateCategory = async ctx => {
    const body = ctx.request.body;
    try {
        const res = await sqlModel.updateCategory(body);
        if (res) {
            ctx.updateSuccess();
        }
    } catch (error) {
        ctx.updateFail(error);
    }
}
module.exports = {
    getCategoryList,
    addCategory,
    deleteCategory,
    updateCategory
}