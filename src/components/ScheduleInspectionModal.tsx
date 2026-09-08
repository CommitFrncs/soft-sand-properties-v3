import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  ShieldCheck, 
  Check, 
  Phone, 
  MessageSquare 
} from 'lucide-react';
import { Property } from '../types';

interface ScheduleInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
  allProperties: Property[];
}

export const ScheduleInspectionModal: React.FC<ScheduleInspectionModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
  allProperties,
}) => {
  const [propertyId, setPropertyId] = useState(selectedProperty?.id || allProperties[0]?.id || '');
  const [inspectionType, setInspectionType] = useState<'physical' | 'virtual'>('physical');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentProperty = allProperties.find((p) => p.id === propertyId) || selectedProperty;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-700" />
            <h3 className="font-bold text-base text-slate-900">
              Schedule Gated Estate Inspection
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Inspection Request Confirmed!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Our gated estate concierge has logged your request for <strong>{currentProperty?.title}</strong> in <strong>{currentProperty?.estateName}</strong>. You will receive an automated gate clearance pass and WhatsApp confirmation shortly.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 text-left space-y-1">
              <div><strong>Tour Type:</strong> {inspectionType === 'physical' ? 'Physical Gate Inspection' : 'Live HD Video Tour (Diaspora)'}</div>
              <div><strong>Selected Time:</strong> {timeSlot}</div>
              <div><strong>Client Contact:</strong> {phone || email}</div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/2348038924100?text=Hello%20Soft%20Sands%20Properties,%20I%20just%20scheduled%20an%20inspection%20for%20${encodeURIComponent(currentProperty?.title || 'Estate Property')}.%20My%20name%20is%20${encodeURIComponent(name)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect Instantly on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Property Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Gated Property
              </label>
              <select
                value={propertyId}
                onChange={(e) => setPropertyId(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 font-medium"
              >
                {allProperties.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({p.estateName})
                  </option>
                ))}
              </select>
            </div>

            {/* Tour Type Toggle */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Inspection Format
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setInspectionType('physical')}
                  className={`p-2.5 rounded-lg border text-left transition-colors flex items-center gap-2 ${
                    inspectionType === 'physical'
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 shrink-0 text-blue-400" />
                  <div>
                    <div className="text-xs font-bold">Physical Tour</div>
                    <div className="text-[10px] opacity-80">Accompanied at Estate Gate</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setInspectionType('virtual')}
                  className={`p-2.5 rounded-lg border text-left transition-colors flex items-center gap-2 ${
                    inspectionType === 'virtual'
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Video className="w-4 h-4 shrink-0 text-blue-400" />
                  <div>
                    <div className="text-xs font-bold">Live Video Tour</div>
                    <div className="text-[10px] opacity-80">HD Walkthrough for Diaspora</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                >
                  <option value="10:00 AM">Morning (10:00 AM)</option>
                  <option value="11:30 AM">Mid-day (11:30 AM)</option>
                  <option value="2:00 PM">Afternoon (2:00 PM)</option>
                  <option value="4:00 PM">Late Afternoon (4:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2.5 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Babatunde Lawal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-100 p-2 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Estate gate clearance pass will be generated with your phone number.</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Confirm Estate Inspection Booking</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
