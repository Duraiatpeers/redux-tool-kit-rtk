import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  increment,
  decrement,
  reset
} from "../redux/counterActions";

import type {
  RootState,
  AppDispatch
} from "../redux/store";

function Counter() {
  const count = useSelector(
    (state: RootState) => state.count
  );

  const dispatch =
    useDispatch<AppDispatch>();

  return (
    <Card sx={{ maxWidth: 400 }}>
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

        </Stack>

      </CardContent>
    </Card>
  );
}

export default Counter;