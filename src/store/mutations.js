export default {
    dialog: (state, dialog) => {
        state.dialog = dialog;
    },
    administrate: (state, bool) => {
        state.administrate = bool;
    },
    snack: (state, snack) => {
        state.snack.text = snack.text;
        state.snack.color = snack.color;
        state.snack.show = true;
    },
    sub: (state, {
        date,
        start,
        end,
        qq,
        id,
        house,
        depart,
        person
    }) => {
        date = date.split("-");
        let time = `${date[1]}-${date[2]} ${start}-${end}`
        state.informations[house].push({
            depart,
            person,
            time,
            qq,
            status: "待审",
            id
        });
    },
    data: (state, data) => {
        state.informations = data;
    },
    status: (state, {
        status,
        id
    }) => {
        let house = state.active;
        state.informations[house].forEach(v => {
            if (v.id == id)
                v.status = status ? "批准" : "驳回";
        });
    },
    delete: (state, id) => {
        let house = state.active;
        state.informations[house].forEach((v, i) => {
            if (v.id == id)
                state.informations[house].splice(i, 1);
        });
    }
}