export const solicitudApi = () => {

    const meses = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const obtenerFechasUltimosDias = (dias = 5) => {
        const fechas = [];
        const hoy = new Date();

        for (let i = 0; i <= dias; i++) {
            const fecha = new Date(hoy);
            fecha.setDate(hoy.getDate() - i);

            fechas.push({
                dia: fecha.getDate(),
                mes: meses[fecha.getMonth()]
            });
        }

        return fechas;
    };

    const apiFetch = async () => {
        try {
            const res = await fetch("https://api.nookipedia.com/villagers", {
                method: "GET",
                headers: {
                    "X-API-KEY": "90aa9c45-87fc-4094-97fe-4788105d44dc",
                    "Accept": "application/json"
                }
            });
            const data = await res.json();
            return data;
        } catch (err) {
            console.error("Error en la API:", err);
            return [];
        }
    };

    const filtrarFestivos = (data, fechas) => {
        return data.filter(villager =>
            fechas.some(fecha =>
                parseInt(villager.birthday_day) === fecha.dia &&
                villager.birthday_month === fecha.mes
            )
        );
    };

    const obtenerFestivos = async (dias = 5) => {
        const fechas = obtenerFechasUltimosDias(dias);
        const data = await apiFetch();
        const festivos = filtrarFestivos(data, fechas);

        // Ordenar según el orden de fechas (más reciente primero)
        festivos.sort((a, b) => {
            const fechaA = fechas.findIndex(f => parseInt(a.birthday_day) === f.dia && a.birthday_month === f.mes);
            const fechaB = fechas.findIndex(f => parseInt(b.birthday_day) === f.dia && b.birthday_month === f.mes);
            return fechaA - fechaB;
        });

        return { festivos, fechas }; 
    };

    return {
        obtenerFestivos
    };
};
