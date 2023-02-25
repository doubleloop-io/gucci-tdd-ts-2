## Mars Rover

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.
Requirements

- You are given the initial starting point (x,y) of a rover, the direction (N,S,E,W) it is facing and the size of the planet (grid).
- The rover receives a string of commands (FFLFFRFFRRBB).
- Implement commands that move the rover forward/backward (F,B).
- Implement commands that turn the rover left/right (L,R)
- After each sequence of command it must print the current position with the format: X:Y:D -> 1:2:S
- If before completing the sequence hits the end of the grid it stops and print the current position

### TODO
- What's the first test?






































































### Next requirements
- Implement wrapping at edges (Pacman effect).
- Add obstacles. In the initialization we pass a list of obstacles on the grid. If the rover encounter an obstacle it stops the sequence and report the current position with the format O:X:Y:D -> O:1:2:E
- Finer rotation (45)
