export interface User {
  id: string;
  displayName: string;
  email: string;
  trustScore: number;
  noShowCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  location: string;
  scheduledDate: string;
  durationMinutes: number;
  reward: number;
  status: string;
  userID: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  message: string;
  status: string;
  applicantID: string;
  caseID: string;
  applicant?: User;
  case?: Case;
  createdAt: string;
  updatedAt: string;
}

export interface Matching {
  id: string;
  status: string;
  meetingLocation: string;
  arrivalConfirmationDeadline: string;
  arrivalConfirmedByHelper: boolean;
  arrivalConfirmedByRequester: boolean;
  helperID: string;
  requesterID: string;
  caseID: string;
  helper?: User;
  requester?: User;
  case?: Case;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  score: number;
  comment: string;
  reviewerID: string;
  reviewedUserID: string;
  matchingID: string;
  reviewer?: User;
  reviewedUser?: User;
  matching?: Matching;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCaseRequest {
  title: string;
  description: string;
  location: string;
  scheduled_date: string;
  duration_minutes: number;
  reward: number;
}

export interface CreateApplicationRequest {
  case_id: string;
  message: string;
}

export interface UpdateApplicationStatusRequest {
  status: 'accepted' | 'rejected';
}

export interface CreateMatchingRequest {
  application_id: string;
  meeting_location: string;
}

export interface CreateReviewRequest {
  matching_id: string;
  reviewed_user_id: string;
  score: number;
  comment?: string;
}

export interface UpdateUserRequest {
  display_name: string;
}

export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
}
