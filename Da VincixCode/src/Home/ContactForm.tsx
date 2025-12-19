import React, { useState, type FormEvent } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const pillFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 5,
    backgroundColor: "#f5f5f7",
    paddingRight: 0,
    "& fieldset": {
      borderColor: "#000",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
      borderWidth: 1,
    },
    "& input": {
      padding: "14px 18px",
      height: "auto",
    },
    "& textarea": {
      padding: "14px 18px",
    },
  },
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enviar formulario:", form);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        Nombre{" "}
        <Typography component="span" sx={{ fontWeight: 400, fontSize: 12 }}>
          (requerido)
        </Typography>
      </Typography>

      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            Nombre
          </Typography>
          <TextField
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={pillFieldSx}
            variant="outlined"
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            Apellido
          </Typography>
          <TextField
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={pillFieldSx}
            variant="outlined"
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            Correo electrónico{" "}
            <Typography component="span" sx={{ fontWeight: 400, fontSize: 12 }}>
              (requerido)
            </Typography>
          </Typography>
          <TextField
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={pillFieldSx}
            variant="outlined"
            required
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            Mensaje{" "}
            <Typography component="span" sx={{ fontWeight: 400, fontSize: 12 }}>
              (requerido)
            </Typography>
          </Typography>
          <TextField
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={5}
            sx={{
              ...pillFieldSx,
              "& .MuiOutlinedInput-root": {
                ...pillFieldSx["& .MuiOutlinedInput-root"],
                borderRadius: 5,
                minHeight: 110,
              },
            }}
            variant="outlined"
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-auto">
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 999,
              textTransform: "uppercase",
              px: 3,
              py: 1.2,
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": { backgroundColor: "#000" },
            }}
          >
            Enviar
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ContactForm;
