import { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography
} from "@mui/material";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementBy
} from "../redux/counterSlice";

import type {
  RootState,
  AppDispatch
} from "../redux/store";

function Counter() {
  const count = useSelector(
    (state: RootState) => state.counter.count
  );

  const dispatch =
    useDispatch<AppDispatch>();

  const [amount, setAmount] =
    useState<number>(1);

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardContent>

        <Stack
          spacing={3}
          alignItems="center"
        >

          <Typography variant="h4">
            Redux Counter
          </Typography>

          <Typography variant="h2">
            {count}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >

            <Button
              variant="contained"
              onClick={() =>
                dispatch(decrement())
              }
            >
              -1
            </Button>

            <Button
              variant="outlined"
              onClick={() =>
                dispatch(reset())
              }
            >
              Reset
            </Button>

            <Button
              variant="contained"
              onClick={() =>
                dispatch(increment())
              }
            >
              +1
            </Button>

          </Stack>

          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(event) =>
              setAmount(
                Number(event.target.value)
              )
            }
          />

          <Button
            variant="contained"
            onClick={() =>
              dispatch(incrementBy(amount))
            }
          >
            Increment By
          </Button>

        </Stack>

      </CardContent>
    </Card>
  );
}

export default Counter;