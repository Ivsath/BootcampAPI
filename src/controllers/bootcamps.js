import Bootcamp from "../models/Bootcamp";

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
export const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
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
export const getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Public
export const updateBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Public
export const deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
