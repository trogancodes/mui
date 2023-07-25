import {
  AddBox,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  Styled,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';

const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    mb: '20px',
  });

  return (
    <>
      <Tooltip
        onClick={(event) => setOpen(true)}
        title="Add Post"
        sx={{
          position: 'fixed',
          margin: 1,
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(event) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="#A4907C" borderRadius={5} p={3}>
          <Typography variant="h6" color="white" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind"
            variant="standard"
            sx={{ width: '100%' }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
