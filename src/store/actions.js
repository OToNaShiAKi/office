import axios from 'axios'
import qs from 'qs'

export default {
    sub: ({
        commit
    }, borrow) => {
        axios.post("php/sub.php", qs.stringify(borrow)).then(res => {
            if (res.data == -1)
                commit("snack", {
                    color: "error",
                    text: "此公房该时间段已被借用！"
                });
            else if (res.data) {
                commit("snack", {
                    color: "success",
                    text: "提交成功！"
                });
                borrow.id = res.data;
                commit("sub", borrow);
            } else throw res;
        }).catch(res => {
            window.console.log(res);
            commit("snack", {
                color: "error",
                text: "提交失败，请确认网络后重新提交！"
            });
        });
    },
    data: ({
        commit
    }) => {
        axios.get("/bgs/php/data.php").then(res => {
            let {
                status,
                informations
            } = res.data;
            if (status) commit("data", informations);
            else throw res;
        }).catch(res => {
            window.console.log(res);
            commit("snack", {
                color: "error",
                text: "获取数据失败，请刷新重试！"
            });
        });
    },
    status: ({
        commit
    }, status) => {
        axios.post("/bgs/php/status.php", qs.stringify(status)).then(res => {
            if (res.data) {
                commit('status', status);
                commit("snack", {
                    color: "success",
                    text: "修改成功！"
                });
            } else throw res;
        }).catch(res => {
            window.console.log(res);
            commit("snack", {
                color: "error",
                text: "提交失败，请确认网络后重新提交！"
            });
        });
    },
    delete: ({
        commit
    }, id) => {
        axios.post("/bgs/php/confirm.php", qs.stringify({
            id
        })).then(res => {
            if (res.data) {
                commit("snack", {
                    color: "success",
                    text: "删除成功！"
                });
                commit("delete", id);
            } else throw res;
        }).catch(res => {
            window.console.log(res);
            commit("snack", {
                color: "error",
                text: "删除失败，请确认网络后重新删除！"
            });
        })
    }
}