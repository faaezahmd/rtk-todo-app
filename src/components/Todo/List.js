import React, { useState } from "react";
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

function TodoList(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <List>
          {props.todoItems.map((item, index) => {
            return (
              <ListItem
                key={index}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={(event) => props.deleteTodo(event, item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <IconButton
                    edge="end"
                    aria-label="Mark as complete"
                    onClick={(event) =>
                      props.completeTodo(event, {
                        id: item.id,
                        completed: item.completed ? false : true,
                      })
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemAvatar>
                <ListItemText primary={item.title} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}

export default TodoList;
