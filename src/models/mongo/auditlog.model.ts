import mongoose, { Schema } from "mongoose";

const auditLogSchema = new Schema(
  {
    action: {
      type: String,
      required: true,
    },

    userId: {
      type: Number,
      required: true,
    },

    performedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AuditLog = mongoose.model("AuditLog",auditLogSchema);