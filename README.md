# README

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|text|null:false, add_index: true|
|email|text|null:false,unique: true|
|password|text|null:false|
|groupe_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :groups,through: groups_users
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|string|null:false|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :users,through: groups_users
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user