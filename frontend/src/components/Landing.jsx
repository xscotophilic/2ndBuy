import React from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

class Landing extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBooks = () => {
    return this.props.books.map((book) => (
      <Grid item xs={12} sm={6} md={4} key={book._id}>
        <Box
          sx={{
            background: "#fff",
            borderRadius: 5,
            boxShadow: 3,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 340,
            mx: "auto",
            minHeight: 420,
          }}
        >
          <Box
            component="img"
            src={book.picurl}
            alt={book.name}
            sx={{
              width: 160,
              height: 220,
              objectFit: "cover",
              borderRadius: 4,
              mb: 2,
              boxShadow: 1,
              background: "#f5f5f5",
            }}
          />
          <Box sx={{ textAlign: "left", width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 0.5,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              noWrap
            >
              {book.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 1,
                fontSize: 15,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              noWrap
            >
              by {book.owner || "Unknown"}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 1.5,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              noWrap
            >
              {book.description || "No description provided."}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "flex-start",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <span role="img" aria-label="price">
                💲
              </span>
              <Typography
                variant="caption"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                noWrap
              >
                {book.price}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <span role="img" aria-label="location">
                📍
              </span>
              <Typography
                variant="caption"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                noWrap
              >
                {book.location}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              noWrap
            >
              Contact:
            </Typography>
            <Link
              href={`mailto:${book.email}`}
              sx={{
                maxWidth: 140,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: 14,
              }}
              noWrap
            >
              {book.email}
            </Link>
          </Box>
        </Box>
      </Grid>
    ));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          2ndBuy!
        </Typography>
        <Typography gutterBottom>
          A place where you can buy and sell books.
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {this.renderBooks()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books || [],
});

export default connect(mapStateToProps, { fetchBooks })(Landing);
