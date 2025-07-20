import { CoursePurchase } from '../models/coursePurchase.model.js'; // adjust path as needed

// @desc Purchase a course (without real payment)
// @route POST /api/purchase
export const purchaseCourse = async (req, res) => {
  try {
    const { courseId, userId, amount } = req.body;

    if (!courseId || !userId || !amount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if already purchased
    const existingPurchase = await CoursePurchase.findOne({ courseId, userId });
    if (existingPurchase) {
      return res.status(409).json({ message: 'Course already purchased' });
    }

    // Simulate payment success
    const newPurchase = new CoursePurchase({
      courseId,
      userId,
      amount,
      status: 'completed',
      paymentId: `mock_${Date.now()}` // Fake payment ID
    });

    await newPurchase.save();
    res.status(201).json({ message: 'Course purchased successfully', data: newPurchase });
  } catch (error) {
    console.error('Purchase error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc Get all courses purchased by a user
// @route GET /api/purchase/user/:userId
export const getUserPurchases = async (req, res) => {
  try {
    const { userId } = req.params;
    const purchases = await CoursePurchase.find({ userId }).populate('courseId');
    res.status(200).json(purchases);
  } catch (error) {
    console.error('Fetch purchases error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
