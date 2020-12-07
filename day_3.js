var input = [
    ["...#..............#.#....#..#.."],
    ["...#..#..#..............#..#..."],
["....#.#.......#............#..."],
["..##.....##.........#........##"],
["...#...........#...##.#...#.##."],
["..#.#...#....#.....#........#.."],
["....##.###.....#..#.......#...."],
[".#..##...#.....#......#..#....."],
["............##.#...#.#.....#.#."],
["..........#....#....#.#...#...#"],
["..##....#.#.#......#.........#."],
["#.#.........#..............##.."],
["....##.##......................"],
["....##..#...........#.........."],
["..#..#.#........##....#......#."],
["..............#..#....#.....#.."],
[".............#...#.....#...#..."],
[".#...........#..........#...#.."],
[".#......#.......#......#......."],
["#..#.............#..#....##.###"],
["........#.#...........##.#...#."],
["......#..#.....##......#......."],
[".....#.....#....#.............."],
["#...##.#......#......#...#....."],
["...........................#..."],
["...#....................#.....#"],
["..#.....#...#.....##.....#....."],
["....................#......#..#"],
[".......#.....##......##....#..."],
["#........##...#.....##..#...#.."],
["........#..#.#......#..###..#.#"],
["##.....#.............#.#....#.."],
["..#.................#....######"],
[".#.#..#.....#.#..........#.#..."],
[".........#....#...#............"],
["........#..#.....#............."],
["............#.#.............##."],
["...#....#..#......#............"],
[".##....#.....#...#.#..........."],
["..#..............#...........##"],
[".....#.#.##...#................"],
["..........#..#.#..........##..#"],
["..#....#...#...#.....######...."],
["....#.#..#........#....#.###..."],
[".......................#......."],
["..#.....#.##................#.."],
[".....#......#..#.....#........#"],
[".#...###.......#.#.........#..#"],
["............#.................."],
["..#.........##.........##......"],
["#...........#.#.......###.#...."],
[".#...#.....#.........###.....#."],
[".#............#........#..#...."],
["...##.#......##................"],
["........#...#...#...#.........."],
[".......#.##......##.#.........."],
["....##.......#..#....#....#...."],
["......#.........###........#..."],
["#....#....####....##......#...."],
["......................#....#.#."],
["...#.#.#....#.#...#...#......#."],
["......#.....##.#...........###."],
["#........#.........##......#.#."],
["....##.....#.....#..#.........."],
["......#...#...#.........#...##."],
["..#........#..................#"],
[".........#..##.#..#..#...#.#..#"],
[".....#.....#...#.....###.....##"],
[".............#....#...#........"],
["..........#.#.#...#..#...#....#"],
["#...............##.......#....."],
["#...#.............#..#...#....#"],
["..#...#...##...##...#..#......."],
["..#..#........#.#...........#.."],
[".....#.....#..................#"],
["....#....##....###..###...##..."],
["..#......###.........##....#.##"],
[".......#.##...#.......#..#....."],
["...#.#.#.#.....##..#..#........"],
["................##....#.#......"],
["..#...#...#...#.....##.#...#..#"],
["..#..#.....#..##....#....#....."],
[".###...#......#........#.....##"],
["##......#..#........#.........."],
["....#...#..#....##..#......####"],
[".#.....##....#..........#......"],
[".#...#....#.........#...#....#."],
[".....#..#.#..#......#..##....#."],
["...#.##...#...#........#......#"],
[".#..#...#.#..#.........#...#..."],
["#....#......##.....#.......#..."],
["..##............##..#.#.#...#.."],
["##.......#.......##............"],
["#......#.##........#...#...#..."],
[".#.#.......##.........#..#.#..."],
[".............##.#........#....."],
[".#..#...###...#..#............."],
[".....#...#..#....#.......#....."],
["#.#.........#.#.#...#...#.#...."],
[".....#.......#.##.##...#....#.."],
[".#.##..#.....#...#.#.#.#.#..#.."],
["..........#...................#"],
[".....#.#.#...##.........#..#..#"],
[".#..#....##......#...#........."],
[".##......#......#...#........#."],
[".....##.#......#............#.#"],
[".#.....##..#...........##......"],
[".....#......#.......##....#...."],
["..#..##..........#.#..........#"],
["#.#.......##..#..##.#....#....."],
[".......#..#.#.......##......#.#"],
["....#...##...#..............#.."],
[".....#.........#......#...##..."],
["#.........#........##..#.....#."],
[".#.#..#.....##.......#......#.."],
["........#..#....#.....###..#..."],
["#.#..#.#..........#............"],
["..#......##..#....#.........#.."],
["#.............................."],
[".......#............#..#..#.#.."],
[".#.....#.#....#..#.##.#........"],
[".......#.###.#........##.#..#.."],
["..............#....#.....##.#.."],
["#..............#....#.###......"],
[".#..#..#...###............#...#"],
[".#.##...#....#..#...#...#......"],
["......##..#..#......#..#....#.."],
[".........#.......##............"],
["...........##...#..#....####..."],
[".#..................#.........."],
["#...#..#..................#...."],
["..............#.....##.....#..."],
["..#.#..#...##..#.....#.....#..#"],
["....#....#.#.........#.....#..."],
[".#.......#...#....#...#.#..#..#"],
["#.........##.....##.......#...#"],
["#..#............#....#........#"],
["..........##...#......#....#..."],
[".......#..##...............#..."],
["#............#.#.#.....#......."],
[".#........##...#..............."],
["..##....#.....#..#.##.#......#."],
[".#...#.............#...#.....#."],
["...##....#.......#......#.#..#."],
["#......................#..#.##."],
["...#..........#..#.........#..."],
["..#......#.......#.#....#......"],
["....#............#...#......#.."],
[".....#..#..##...#...#.........#"],
[".....#......#....#....#........"],
[".............#..#..........#..."],
["....#..............#.....#.#..."],
["....#.................#.#...#.#"],
[".........#.#...........###.#.##"],
["#...........#..##.#....#.##.#.."],
["#.#.....#......................"],
["##.#.........#....##.#.#..#.#.."],
["#..........#.#.#.#.#..#..##..#."],
["..#...#..###.........#......#.."],
[".....#......#..#.#............#"],
["...........#...#.#.#.###....#.."],
["#....#..#.......##.#.......##.."],
["..............#.....##.#......."],
[".#.....#.#..#.........#.#.#..#."],
["..#..#..#..#................#.."],
["...........#..#.#...#.........#"],
[".#..#..#...#........#...#.#..#."],
["...#.#..#......#..#............"],
["........#......##.....#....#..."],
["#...#......##.#.#.............."],
[".#........................#...."],
["#.#.....#.##.....#..#.#........"],
["#..........##.#.......#....#..#"],
["#...#..#..#.....#....#....#...."],
["#...........#..#.#....##.##...."],
["##......#..#........#.......##."],
["#........#..#...#..........#..."],
["...#...#......##....#.#........"],
["...##..#..#.##....#...#........"],
["#.#..#....#...#........#......."],
["..........#.......#..........#."],
["......##...#....###...#....#..."],
["........#..#.....#......#......"],
["....#.........##...#..##......#"],
["....#...........#.#..#.#.#.#..#"],
["..#......#..#......#........#.#"],
["#..#....#.....#.............#.."],
["............................#.."],
["#...#.#.....#...#....#....#...."],
["........#...#...#...#...#......"],
[".###........#....#.##.....##.#."],
[".........#.....#..........#...."],
[".#.........#....##.#.....#....."],
["#..#....................##.#..."],
["..##.#.............#....#.#...."],
["..#.#........#............##.#."],
["#........#...##.....#...#.....#"],
[".........#.#..........#....#..#"],
["...###.#..#.#......#.#.....#..."],
["......#.....#..#...#........#.."],
[".......#...#.....#....#....#..#"],
[".#.#........#......##.......#.."],
["#.................###.........."],
["#........#.#..#....#..#........"],
["..##....#.#...##...#...##....#."],
["...#.#......##...#.....#..#...."],
["#..#........#...###....#......."],
["##.#....#..#.#..........#......"],
["....#...###...#.....#........#."],
["..#.#........#....##.#........."],
["......##.##.................##."],
[".#....##...#.#..#.#............"],
[".#...###........#......#......."],
["##..#.#......#..#..#...#......."],
[".......##..#....#........#....#"],
["......#..........#............."],
["....##..##..#......#.#........."],
[".....#....................##..."],
["...###.....#.....#...#.#.##.#.."],
["....#.#..#.......#..#......##.."],
[".......#.#..#.##.#...#......#.."],
["...#.#....#.#...#..##...#...#.."],
["#.##...#....#..#.............#."],
["...#...#...#.......#..........#"],
[".#..#.............#..##.#......"],
["....#.......#..............#.#."],
["..................#..#.....##.#"],
[".#...#..#......#..........#...#"],
["..#.#.....#..#....#....#####.#."],
[".......###.......#....#....#..."],
["......#.#........#...#........."],
["......#..#.#.#....#.#.#....##.."],
[".#...#.#...##.#......#........."],
["#....#..##....#.#.......#....#."],
["..##.#.....#.....#.........#..."],
["......#......#....#....#.....#."],
["...##.....#....#......#......#."],
["......#......##............#.#."],
[".##.#.......#....#...#....#...."],
["....#..#..#...##.......#..#...."],
["....#....#...#.#........#..#..."],
["....#.....#..........#..#......"],
["....#....#...#.....#..##.....#."],
["##...#..##......#....##..#..#.."],
[".....##.##..............##....."],
["#.#....#.##..#....#...##......."],
["..#.....##.....#.....######...#"],
["...#.....#.#.#......#......##.#"],
["...........##.............#...."],
["...##......#..#......#...#....."],
["....#.##......#..#....#.#..#..."],
[".#..#....#...#..#.....##......."],
[".....#..#.................#..#."],
["................#..#...#......#"],
["...##....#.....#..#....##......"],
["....##...............##...#...."],
["......#..........#..##........."],
[".......###.......#.........#..#"],
["......................#....#.#."],
["#.#.....#...##............#...."],
["........#......##......#.....#."],
["...#....#....#.#..##.#..#.#.#.."],
["..#.#....#.##...#..#.....#.#..."],
["............#....#..#.......#.."],
["#...#...#.#......#...##.....#.#"],
["......#....#....#.......#......"],
["....#.......#..........#....#.."],
["........#####........#....#...."],
["......#....##..............#.#."],
["....#....#.......#.......#....."],
[".##.#....##....#..............."],
["#.....##........#..#.#...#.#..."],
["...#......##....#.............."],
[".#.....#.....#.......##....##.."],
["#....#..........#.#..#........."],
["......##..........##.......#..."],
[".##......##.....#.#....#......#"],
["....#......................#..."],
[".#...........###........#...#.."],
["#.#..#..#..#...##.#....#.#..#.."],
["...##...........#.#..........#."],
["......#.#..#....#....#........."],
["....#....#.#......#.........##."],
[".#..#...#...##....#...#......#."],
["#.#......#...#.#.#...........#."],
["##.....#..........##....##..##."],
["...#.#.....#..##........#......"],
["..#........##........#..#......"],
[".......#...............##..#..."],
[".......#.#....#..###..........."],
[".............#........#...#...."],
["#.................#......#..#.."],
["...#....#..#..............#...#"],
[".............#....##....#..##.."],
["#........#..........##...##...#"],
["............#....#.....#.#....#"],
[".....#..............##..#...#.."],
["..#....#......###....#.#...##.."],
["....##......#.....#....#......."],
[".....#...............#.....#..."],
[".#.....#.....#..............#.."],
["#................#..#.........."],
[".##....#....#.....#............"],
["#.####...#..#..#....#.........."],
["..##........##.....##......#..#"],
["......#.....#...##.........##.."],
["....##..#.....#.#.........#...#"],
[".....##..#....#....#.#...#..#.."],
["...#............#...........#.."],
[".......#.#..#.#.#..#........#.#"],
["....#.#........#.#.#..#...#...#"],
["..#....#....#..#......#........"],
[".#...........................#."],
[".#..#....####........##......#."],
[".#.....#..#.#.................#"],
[".#..#...........#...#....#...#."],
["......##..#........#..#....#..."],
["..#.............#....#........#"],
["#.#..........#.##.......#.#..#."],
["..#....#...#...............#..."],
["..............#..........#..#.."],
["..#.....#.#.....#...#...#..#..."],
[".........#...###.#...#........#"]
]




day_3_challenge_1 = () => {
    index_from_right = 3;
    tree_count = 0;

    for (i=1; i<input.length; i++) {
        line = input[i];
        item = line[0].split("")[index_from_right]
        if (item == "#") {
            tree_count++;
        }
        if (index_from_right == 30) {
            index_from_right = 2; 
        }
        else if (index_from_right == 29) {
            index_from_right = 1; 
        }
        else if (index_from_right == 28) {
            index_from_right = 0;
        } else {
            index_from_right += 3;
        }
    }
    // correct answer is 191
    console.log(tree_count);
};

day_3_challenge_2 = () =>
{
    const lines = document.getElementsByTagName('pre')[0].innerHTML;
    const input = lines.split('\n').map(line => line.split(''));
    let slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
    let total = 1;
    for(let slope of slopes)
    {
        let [xinc, yinc] = slope;
        let x = 0;
        let hitcount = 0;
        for(let y = 0; y < input.length; y += yinc)
        {
            if(input[y][x] == '#')
            {
                hitcount++
            }

            x += xinc;
            if(x >= input[y].length)
            {
                x = x%input[y].length;
            }
        }
        total = total * hitcount;
    }
    return total;
}

day_3_challenge_2();