function destinationCity(paths) {

    let track = {};
    let key = paths[0][0];

    for (let path of paths) {
        track[path[0]] = path[1]
    }

    while (key in track) {
        key = track[key]
    }

    console.log(key);
}

destinationCity([["pYyNGfBYbm", "wxAscRuzOl"], ["kzwEQHfwce", "pYyNGfBYbm"]])