import Bootcamp from "../models/Bootcamp";

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export const getBootcamps = (req, res) => {
  res.status(200).json({ success: true });
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Public
export const createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc      Get a single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
export const getBootcamp = (req, res) => {
  res.status(200).json({ success: true });
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Public
export const updateBootcamp = (req, res) => {
  res.status(200).json({ success: true });
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Public
export const deleteBootcamp = (req, res) => {
  res.status(200).json({ success: true });
};
