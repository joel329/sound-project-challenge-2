while True:
    if input.light_level() > 5:
        light.set_all(color.rgb(255, 0, 0))
        music.play_melody("E B C5 A B G A F ", 120)
        music.stop_all_sounds()
        


        