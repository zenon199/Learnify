
import TryCatch from '../middlewares/tryCatch.js'
import {Courses} from '../models/Courses.js'

export const getAllCourses = TryCatch(async (req,res) => {
    const courses = await Courses.find();
    res.json({
        courses,
    })
});

export const getSinglleCourse = TryCatch(async (req,res) => {
    const course = await  Courses.findById(req.params.id);

    res.json({
        course,
    })
});

export const fetchLectures = TryCatch(async (req,res) => {
    const lectures = await Lectures.find({course: req.params.id});

    const user = await User.findById(req.user._id);

    if(user.role=="admin") {
        return res.json({lectures});
    }

    if(!user.subscription.includes(req.param.id)) {
        return res.status(400).json({
            message: "You don't have access to this course"})
    }

    res.json({lectures});
});

export const fetchLecture = TryCatch(async (req,res) => {
    const lecture = await Lecture.findById(req.params.id);

    const user = await User.findById(req.user._id);

    if(user.role=="admin") {
        return res.json({lecture});
    }

    if(!user.subscription.includes(req.param.id)) {
        return res.status(400).json({
            message: "You don't have access to this course"})
    }
    res.json({lecture});
});

export const getMyCourses = TryCatch(async (req,res) => {
    const courses = await Courses.find({id: req.user.subscription});

    res.json({
        courses,
    });
});