import Stripe from 'stripe';
import {STRIPE_SECRET_KEY} from '$env/static/private';

export async function load(){
    const stripe = new Stripe(STRIPE_SECRET_KEY);
    return await stripe.products.list({limit: 3});
}