import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/myportfolio')
    console.log('🟢 MongoDB connected successfully')
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err)
    process.exit(1)
  }
}

export default connectDB
