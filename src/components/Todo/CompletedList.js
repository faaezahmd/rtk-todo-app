import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import Grid from "@mui/material/Grid";

function CompletedList(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <List>
          {props.todoItems &&
            props.todoItems.map((item, index) => {
              return (
                <ListItem
                  key={index}

                  //   secondaryAction={
                  //     <IconButton
                  //       edge="end"
                  //       aria-label="delete"
                  //       onClick={(event) => props.deleteTodo(event, item.id)}
                  //     >
                  //       <DeleteIcon />
                  //     </IconButton>
                  //   }
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              );
            })}
        </List>
      </Grid>
    </Grid>
  );
}

export default CompletedList;
