class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :summary
      t.string :year
      t.string :genre
      t.string :imdb_link

      t.timestamps
    end
  end
end
