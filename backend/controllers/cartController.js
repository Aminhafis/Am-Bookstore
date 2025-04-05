import cartModel from '../model/cartModel.js'

export const postIntoCart = async (req,res)=> {
    const {userId, bookId, title, price, quantity } = req.body
    try {
        // Check if cart exists for the user
        let cart = await cartModel.findOne({ userId });
    
        if (cart) {
          // Check if the book is already in the cart
          const itemIndex = cart.items.findIndex((item) => item.bookId == bookId);
    
          if (itemIndex > -1) {
            // If book exists, update quantity and total price
            cart.items[itemIndex].quantity += quantity;
            cart.items[itemIndex].totalPrice =
              cart.items[itemIndex].quantity * price;
          } else {
            // Add new item to the cart
            cart.items.push({ bookId, title, price, quantity, totalPrice: price * quantity });
          }
          cart.cartTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0);
          await cart.save();
        } else {
          
          cart = new cartModel ({
            userId,
            items: [{ bookId, title, price, quantity, totalPrice: price * quantity }],
            cartTotal: price * quantity,
          });
          await cart.save();
        }
    
        res.status(200).json(cart);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add item to cart' });
      }
    ;
    
}

// 2. Get cart for a specific user
export const getCart = async(req,res)=>{
    const {userId} = req.params
    console.log(userId);
    try {
        const cart = await cartModel.findOne({userId}).populate("items.bookId")
        if(!cart){
            return res.status(404).json({message : "Cart not find"})
        }res.status(200).json(cart)
    } catch (error) {
        console.log(error)
        res.status(500).json({Error : "Failed to fetch cart"})
    }
}

// 3. Update cart item quantity
export const updateCart = async(req,res)=>{
    const {userId} = req.params
    const {bookId, quantity} = req.body

    try {
        const cart = await cartModel.findOne({userId})

        if(!cart){
            return res.status(404).json({message: "Cart not found"})
        }

        const itemIndex = cart.items.findIndex((item)=> item.bookId == bookId)
        if(itemIndex > -1){
            cart.items[itemIndex].quantity=quantity
            cart.items[itemIndex].totalPrice= cart.items[itemIndex].price * quantity
            cart.cartTotal = cart.items.reduce((acc, item)=> acc + item.totalPrice, 0)

            await cart.save()
            res.status(200).json(cart)
        }else{
            res.status(404).json({message : "Item not found on cart"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Failed to update cart item"})
    }
}

// 4. Remove an item from the cart
export const deleteCartItem = async (req, res) => {
    const { userId, bookId } = req.params;
    console.log(userId);
    console.log(bookId);

    try {
        const cart = await cartModel.findOne({ userId });  // Await the async call

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Filter out the item with the given bookId
        cart.items = cart.items.filter(item => item.bookId._id != bookId);

        // Recalculate the total price after removing the item
        cart.cartTotal = cart.items.reduce((acc, item) => acc + item.totalPrice, 0);

        // Save the updated cart
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to remove item from cart' });
    }
};


// 5. Clear the entire cart
export const deleteCart = async (req,res)=>{
    const {userId} = req.params
    try {
        const cart = await cartModel.findOneAndDelete({userId})

        if(!cart){
            return res.status(404).json({ message: 'Cart not found' });
        }  
          res.status(200).json({ message: 'Cart cleared successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to clear cart' });
    }
}