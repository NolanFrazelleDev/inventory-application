Have an object of properties that determine the inventory. Some keys for this object include name, number of items to be inventoried, date added, date to reorder/throw away/use by date, deleted property, picture for inventory, picture for each individual items. This object is what will be rendered in the feed section. The feed section will be the users inventory screen. So maybe instead of displaying this. We will display all of the users inventories that are simply just objects. Clicking the object/inventory will bring up another screen, kind of like an individual post that you view the inventory and change things as needed. 

Update This and add more once the top is finished.

Regarding the object and actually making an inventory of things. With the number of items property I can display on the individual inventory/:id squares representing an item. Also that number of items should return an array of items so that I can manipulate the items in their inventory. I need to change feed to inventory managment, with the inventories/ route. Possibly making an entirely new router page. The reason for this would to have inventories/:id/addItem, inventories/:id/deleteItem, inventories/:id/moveItem








THINGS TO DO NEXT DAY: 
    -Make an inventory route with the base /profile/inventory/:id being the 'manangment' page that comes from the feed section from BUB. 
    -Add a setting section
    