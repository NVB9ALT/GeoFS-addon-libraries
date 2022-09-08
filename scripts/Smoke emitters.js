//This is how to add smoke emitters to an aircraft.
//Use whichever smoke emitter is more appropriate.
//You can play around with the worldPosition and other values, some documentation on that is at the bottom.

let whiteSmokeEmitter = new geofs.fx.ParticleEmitter({
            anchor: {
                        worldPosition: [0, 0, 0]
                    },
            duration: 1E10,
            rate: .05,
            life: 4E4,
            easing: "easeOutQuart",
            startScale: .01,
            endScale: .01,
            randomizeStartScale: .05,
            randomizeEndScale: .15,
            startOpacity: 0.9,
            endOpacity: 1E-5,
            startRotation: "random",
            texture: "whitesmoke"
})
//Call this to remove the above named emitter
whiteSmokeEmitter.destroy()


let darkSmokeEmitter = new geofs.fx.ParticleEmitter({
            anchor: {
                        worldPosition: [0, 0, 0]
                    },
            duration: 1E10,
            rate: .05,
            life: 4E4,
            easing: "easeOutQuart",
            startScale: .01,
            endScale: .01,
            randomizeStartScale: .05,
            randomizeEndScale: .15,
            startOpacity: 0.9,
            endOpacity: 1E-5,
            startRotation: "random",
            texture: "darksmoke"
})
//Call this to remove the above named emitter
darkSmokeEmitter.destroy()

//Variables:
//anchor -> worldPosition: can be set to basically anywhere. Is in the aircraft's frame of reference,
//however I have not had success with setting it with variables.
//duration: how long the smoke emitter lasts. I don't usually mess around with this.
//rate: this presumably affects the density of the smoke trail.
//life: this affects how long the smoke trail lasts. It's essentially how long each individual smoke particle will last.
//easing: IDK what this does, but you're welcome to educate me.
//startScale and endScale: these control how big each smoke particle will be. You can have endScale be smaller
//to have the particles shrink behind you, or have startScale smaller to have the particles grow behind you.
//randomizeStartScale and randomizeEndScale: these control how much the size of the smoke particle will vary between particles.
//It doesn't change much in terms of visuals unless you do interesting things with it.
//startOpacity: how opaque or transparent the particle will be when spawned
//endOpacity: more or less how much it fades before despawning - smaller numbers mean more fading
//startRotation: IDK what the options are for this. Just keep on random.
