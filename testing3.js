setTick(() => {
    const ped = PlayerPedId();

    if (ped) {
        const maxHealth = GetPedMaxHealth(ped);

        console.log(`[FIVEM DEBUG] Ped: ${ped} | Max Health: ${maxHealth}`);
    }
});
