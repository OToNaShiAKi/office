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
        group,
        person
    }) => {
        date = date.split("-");
        let time = `${date[1]}-${date[2]} ${start}-${end}`
        state.informations[house].push({
            group,
            person,
            time,
            qq,
            status: "未审核",
            id
        });
    },
    data: (state, data) => {
        state.informations = data.informations;
    },
    status: (state, {
        status,
        id
    }) => {
        let house = state.active;
        state.informations[house].forEach(v => {
            if (v.id == id)
                v.status = status;
        });
    },
    delete: (state, id) => {
        let house = state.active;
        state.informations[house].forEach((v, i) => {
            if (v.id == id)
                state[house].splice(i, 1);
        });
    }
}