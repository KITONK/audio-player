import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export const formatDuration = (time) =>
  moment.duration(time, "seconds").format("mm:ss", { trim: false });