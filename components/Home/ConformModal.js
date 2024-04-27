import { useSession } from "@clerk/nextjs";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

export default function ConformModal({ setModalopen }) {
  const [loader, setloader] = useState(false);

  const session = useSession();
  const router = useRouter();

  const handleasendMail = async () => {
    setloader(true);
    const email = session.session.publicUserData?.identifier;
    const name = session.session.publicUserData?.firstName;

    try {
      const response = await axios.post(`/api/mailer`, {
        email,
        name,
      });

      setModalopen(false);
      setloader(false);
      router.push("/success");
    } catch (error) {
      setloader(false);
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        open={true}
        onClose={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          sx={{
            position: "relative",
            top: "35%",
            left: { md: "35%", xs: "9%" },
            width: { md: "30%", xs: "80%" },
            height: "30%",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 4,
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {loader && (
              <Box
                sx={{ display: "flex", marginTop: 15, position: "absolute" }}
              >
                <CircularProgress />
              </Box>
            )}
            <Typography
              sx={{
                marginTop: 4,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Conform Your Ride
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                marginTop: -3,
                fontSize: "16px",
                fontWeight: "bold",
                color: "grey",
              }}
            >
              Are You Sure Wanted To Conform Your Ride With Us..
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              height: "30px",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                handleasendMail();
              }}
            >
              Conform
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setModalopen(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
