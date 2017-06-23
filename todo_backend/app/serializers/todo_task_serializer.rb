class TodoTaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :status
end
