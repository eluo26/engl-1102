/* =========================================================
   BUILDING DATA — the one place to add / edit buildings.

   Each entry drives: the clickable shape on the campus map,
   the hover tooltip, and the card in the building index.

   - id:      matches the page file name  ->  buildings/<id>.html
   - shapes:  rectangles on the map, [x, y, width, height],
              measured in PIXELS of assets/maps/campus.png
              (1135 wide x 938 tall; open it in Paint to read
              coordinates). Use several rectangles for a group.
   - short:   short name (optional)
   - who:     team member writing the page

   To add a building: add an entry here AND copy
   buildings/_template.html to buildings/<id>.html.
   ========================================================= */

const BUILDINGS = [
  {
    id: "dm-smith",
    // NOTE: D.M. Smith is not labeled on the base map. Placed across Cherry St
    // from Skiles (685 vs 686 Cherry St). Katy: please confirm the footprint.
    short: "D.M. Smith",
    name: "D.M. Smith Building",
    teaser: "A 1923 Carnegie-funded classroom building, recently restored as the home of the School of Public Policy.",
    who: "Katy",
    shapes: [[662, 602, 36, 26]]
  },
  {
    id: "skiles",
    short: "Skiles",
    name: "Skiles Classroom Building",
    teaser: "Home of the School of Mathematics and the School of Literature, Media, and Communication.",
    who: "TBD",
    shapes: [[567, 600, 58, 35]]
  },
  {
    id: "libraries",
    short: "Libraries",
    name: "The Libraries: Price Gilbert, Crosland & CULC",
    teaser: "From Price Gilbert (1953) to Crosland Tower (1969) to the Clough Commons, tracing how the library grew with campus.",
    who: "TBD",
    shapes: [[557, 518, 46, 46], [602, 546, 34, 34], [630, 573, 36, 25]]
  },
  {
    id: "howey",
    short: "Howey",
    name: "Howey Physics Building",
    teaser: "The School of Physics' home and a window into Georgia Tech's mid-century science expansion.",
    who: "Avary",
    shapes: [[456, 365, 58, 36]]
  },
  {
    id: "kendeda",
    short: "Kendeda",
    name: "Kendeda Building",
    teaser: "A Living Building Challenge–certified building built around sustainable water and energy systems.",
    who: "Niyu",
    shapes: [[400, 282, 46, 34]]
  },
  {
    id: "stamps",
    short: "Stamps",
    name: "Stamps Health Services",
    teaser: "Student health and wellness services, and what they say about how campus care has changed.",
    who: "Charlie",
    shapes: [[226, 522, 42, 34]]
  },
  {
    id: "brittain",
    short: "Brittain",
    name: "Brittain Dining Hall",
    teaser: "The historic dining hall, renovated in 1964, 1995, 2002, 2007, and 2026.",
    who: "Georgia",
    shapes: [[817, 680, 48, 24]]
  },
  {
    id: "east-campus-dorms",
    short: "East Campus Dorms",
    name: "East Campus Dorms",
    teaser: "Postwar residence halls built as enrollment boomed after World War II.",
    who: "TBD",
    shapes: [[820, 565, 52, 26], [820, 603, 46, 38], [818, 706, 48, 40]]
  },
  {
    id: "tech-square",
    short: "Tech Square",
    name: "Technology Square",
    teaser: "Opened in 2003, Tech Square pushed campus across the Connector into Midtown Atlanta.",
    who: "TBD",
    shapes: [[888, 360, 86, 52], [898, 422, 68, 50], [980, 422, 64, 52], [980, 480, 64, 42]]
  }
];
