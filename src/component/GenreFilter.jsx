import React from 'react'
import { Card } from 'antd';
import { genRadiusStyle } from 'antd/es/input-number/style';
// { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
//   { title: "The Godfather", genre: "Crime", year: 1972 },
//   { title: "The Dark Knight", genre: "Action", year: 2008 },
//   { title: "12 Angry Men", genre: "Drama", year: 1957 },
//   { title: "Schindler's List", genre: "Drama", year: 1993 },
//   {
//     title: "The Lord of the Rings: The Return of the King",
//     genre: "Fantasy",
//     year: 2003,
//   },
//   { title: "The Good, the Bad and the Ugly", genre: "Western", year: 1966 },
//   { title: "Forrest Gump", genre: "Drama", year: 1994 },
//   { title: "Inception", genre: "Science Fiction", year: 2010 },
//   { title: "The Matrix", genre: "Science Fiction", year: 1999 },
//   { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
//   { title: "Saving Private Ryan", genre: "War", year: 1998 },
//   { title: "Jurassic Park", genre: "Science Fiction", year: 1993 },
//   { title: "Terminator 2: Judgment Day", genre: "Science Fiction", year: 1991 },
//   { title: "The Lion King", genre: "Animation", year: 1994 },
const gridStyle = {
    width:"11%",
    textAlign: 'center',
    backgroundColor:"#c3c3c3",
    padding:"o.5rem",
    margin:"10px",

    borderRadius:"1rem",


// width: "20%", // increased the width for better visibility
// textAlign: 'center',
// backgroundColor: "#c3c3c3",
// padding: "10px", // increased the padding
// margin: "10px",
// borderRadius: "10px", // increased the border radius
// cursor: "pointer", // change the cursor to pointer on hover
// transition: "all 0.3s ease", // smooth transition
  
  
  };
  const Types=["Drama","Crime","Action","Fantasy","Western","Science Fiction","Animation","War","Thriller"]

const GenreFilter = ({handleGenre}) => {
  return (
    
    <Card style={{ gap:"16px",marginTop:"2px" ,backgroundColor:"#D3D3D3"}} title="Filter by Genre">


        {
            Types.map((type)=>{
                return  <Card.Grid  onClick={()=>handleGenre(type)} style={gridStyle}>{type}</Card.Grid>
            })
        }
    {/* <Card.Grid style={gridStyle}>Drama</Card.Grid>
    <Card.Grid style={gridStyle}>
    Crime
    </Card.Grid>
    <Card.Grid style={gridStyle}>Action</Card.Grid>
    <Card.Grid style={gridStyle}>Fantasy</Card.Grid>
    <Card.Grid style={gridStyle}>Western</Card.Grid>
    <Card.Grid style={gridStyle}>Science Fiction</Card.Grid>
    <Card.Grid style={gridStyle}>Animation</Card.Grid>
    <Card.Grid style={gridStyle}>War</Card.Grid>
    <Card.Grid style={gridStyle}>Thriller</Card.Grid> */}
  </Card>
  
  )
}

export default GenreFilter