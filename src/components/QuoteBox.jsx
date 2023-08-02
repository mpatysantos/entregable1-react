import'./style/QuoteBox.css'

const QuoteBox = ({handleChangeQuote, quote}) => {
   return (
    <section className='quoteBox'>
       
        <h1 className='fortune-text'>Fortune <span className= 'fortune-title'>Cookies</span></h1>
        
        <section>
            <button onClick={handleChangeQuote} className='button-lucky'><b>Try Luck</b>
            </button>
          <article>
                <p className='quote-phrase'>
                {quote.phrase}
                </p>
                       
          </article>
        </section>

        <footer><h4>Fuente: {quote.author}</h4>

        </footer>      
    </section>
  )
}

export default QuoteBox


