const mongoose = require('mongoose');

const monasterySchema = new mongoose.Schema({
    name: {
        english: { type: String, required: true },
        nepali: String,
        hindi: String,
        sikkimese: String
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        english: { type: String, required: true },
        nepali: String,
        hindi: String
    },
    location: {
        coordinates: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        },
        address: { type: String, required: true },
        district: { type: String, required: true },
        altitude: String,
        distanceFromGangtok: String
    },
    history: {
        founded: String,
        founder: String,
        lineage: String,
        significance: String
    },
    images: {
        main: { type: String, required: true },
        gallery: [String],
        virtualTour: [String]
    },
    audioGuides: {
        english: String,
        nepali: String,
        hindi: String
    },
    visitingInfo: {
        openingHours: String,
        entryFee: String,
        bestTimeToVisit: String,
        photography: {
            exterior: { type: Boolean, default: true },
            interior: { type: Boolean, default: false }
        }
    },
    statistics: {
        views: { type: Number, default: 0 },
        visits: { type: Number, default: 0 }
    },
    featured: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true
});

// Create slug from name
monasterySchema.pre('save', function(next) {
    if (!this.slug && this.name.english) {
        this.slug = this.name.english
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-');
    }
    next();
});

module.exports = mongoose.model('Monastery', monasterySchema);
