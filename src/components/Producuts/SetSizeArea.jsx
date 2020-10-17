import React, { useEffect, useState, useCallback} from 'react'
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, 
  IconButton, Paper, makeStyles} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Detete';
import { TextInput } from '../UIkit';
import { CheckCircle } from '@material-ui/icons';

const useStyles = makeStyles({
  iconCell: {
    height: 48,
    width:48
  },
  checkIcon: {
    float: "right"
  }
})

const SetSizeArea = (props) => {
  const classes = useStyles();

  const [index, setIndex] = useState(0),
        [size, setSize] = useState(""),
        [quantity, setQuantity] = useState(0);

  const inputSize = useCallback((event) => {
    setSize(event.target.value)
  }, [setSize])

  const inputQuantity = useCallback((event) => {
    setQuantity(event.target.value)
  }, [setQuantity])


  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>サイズ</TableCell>
              <TableCell>数量</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sizes.length > 0 && (
              props.sizes.map((item, index) =>{
                <TableRow key={item.size}>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell}>
                      <EditIcon/>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              })
            )}
          </TableBody>
        </Table>
        <div>
          <TextInput
            fullWidth={false} label={"サイズ"} multiline={false} required={true}
            onChange={inputSize} rows={1} value={size} type={"text"} />
          <TextInput 
            fullWidth={false} label={"サイズ"} multiline={false} required={true}
            onChange={inputQuantity} rows={1} value={quantity} type={"number"} />
        </div>
        <IconButton className={classes.checkIcon}>
          <CheckCircle />
        </IconButton>
      </TableContainer>
    </div>
  )
}

export default SetSizeArea