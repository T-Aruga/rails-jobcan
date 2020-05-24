class User < ApplicationRecord
  before_validation :downcase_email

  # password hashing
  has_secure_password

  # validates
  validates :email, presence: true, email: { allow_blank: true }
  VALID_PASSWORD_REGEX = /\A[\w\-]+\z/
  validates :password, presence: true,
                       length: { minimum: 8 },
                       format: {
                         with: VALID_PASSWORD_REGEX,
                         message: :invalid_password
                       },
                       allow_blank: true

  # methods
  # 自分以外のactiveなユーザーがいればtrueを返す
  def activated?(email)
    users = new_record? ? User.all : User.where.not(id: self.id)
    users.find_by(email: email, activated: true).present?
  end

  private
    # validatesにemail小文字化
    def downcase_email
      self.email = email.downcase if self.email
    end
end
