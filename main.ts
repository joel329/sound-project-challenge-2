while (true) {
    if (input.lightLevel() > 5) {
        light.setAll(color.rgb(255, 0, 0))
        music.playMelody("E B C5 A B G A F ", 120)
        music.stopAllSounds()
    }
    
}
